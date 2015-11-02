class TimecardsController < ApplicationController
  def new
  end

  def index
    @timecards 	= Timecard.all
    @timecard 	= Timecard.new
    unless params[:start_date].nil? || params[:end_date].nil?
      @dateRange = Date.strptime(params[:start_date],'%m/%d/%Y')..Date.strptime(params[:end_date],'%m/%d/%Y') 
    else
      @dateRange = []
    end
  end

  def show
  end

  def create
    respond_to do |format|
      format.html{ render action: "new"}
    end
  end
end
