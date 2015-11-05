class TimecardsController < ApplicationController
  def new
    @timecard = Timecard.new
  end

  def index
    @timecards = Timecard.all
    respond_to do |format|
      format.html
      format.json{
        unless params[:startDate].nil? || params[:endDate].nil?
          @dateRange = Date.strptime(params[:startDate])..Date.strptime(params[:endDate]) 
        else
          @dateRange = []
        end
        render partial: 'timecards/timecardsTable.html.erb', locals: { dateRange: @dateRange }
      }
    end
  end

  def show
    
  end

  def create
  end
end
