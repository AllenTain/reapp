class TimecardsController < ApplicationController
  def new
    @timecard = Timecard.new
  end

  def index
    @timecards = Timecard.all
  end

  def show
    unless params[:startDate].nil? || params[:endDate].nil?
      @dateRange = Date.strptime(params[:startDate])..Date.strptime(params[:endDate]) 
    else
      @dateRange = []
    end
    @timecards = Timecard.where(:occurrence => @dateRange)
    .where(:exceptions => true)
    puts @timecards
    render :partial => 'timecardsTable', :locals => {:dateRange => @dateRange}
  end

  def create
  end
end
